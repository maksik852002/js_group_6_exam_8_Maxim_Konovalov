import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import { CATEGORIES } from '../../constants';

class PostForm extends Component  {

   state = {
      author:'',
      text:'',
      category:CATEGORIES[0],
      btnloading:false,
      loading:false,
    };
  
  
  async componentDidMount () {
    if(this.props.match.path !==`/add-quotes`) {
      const id = this.props.match.params.id
      this.setState({loading:true});
      const result = await axiosBlog.get(`/quotes/${id}.json`)
      this.setState({author: result.data.author, text: result.data.text, category: result.data.category, loading: false})
    } 
  };

  componentDidUpdate (prevProps) {
    prevProps.match.path!==this.props.match.path &&
    this.setState({author:'', text:'', category:CATEGORIES[0]})
  }

  valueHandleChanged = e => this.setState({[e.target.name]: e.target.value});
    
  submitHandler = async e => {
    e.preventDefault();

    const quotes = {
      category: this.state.category,
      author:this.state.author,
      text:this.state.text,
    };

    this.setState({btnloading:true});
    this.props.match.path === `/add-quotes` 
      ? await axiosBlog.post('quotes.json', quotes)
      : await axiosBlog.patch(`quotes/${this.props.match.params.id}.json`, quotes);
    this.setState({btnloading:false});
    this.props.history.push('/');
  };

  render = () => {
    let title = 'Submit New Quote';
    let btnLabel = 'Submit';
    let placeholder = 'Enter Quote'
    if (this.props.match.path !== `/add-quotes`){
      title="Edit Quote"
      btnLabel='Edit'
      placeholder=title
    }
    if(this.state.loading){
      return  <Spinner/>
    }
      return (
      <Fragment>
        <h2 className='pt-4 text-center'>{title}</h2>
        <form onSubmit={this.submitHandler} className='border border secondary p-3'>
          <div className="form-group">
            <label htmlFor="category">Choose Category</label>
            <select onChange={this.valueHandleChanged} name="category" value={this.state.category} type="select" className="form-control" id="category">
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input onChange={this.valueHandleChanged} name='author' value={this.state.author} type="text" className="form-control" id="author" placeholder="Author" required/>
          </div>
          <div className="form-group">
          <label htmlFor="text">Quote Text</label>
            <input onChange={this.valueHandleChanged} name='text' value={this.state.text} type="text" className="form-control" id="text" placeholder={placeholder} required/>
          </div>
          {!this.state.btnloading  
          ? <Button
            label={btnLabel}
            type='submit'
            addClass='secondary'
          />
          : <Button
              label={
                <Fragment>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </Fragment>
              }
              type='button'
              addClass='secondary'
              disabled={true}
            />
          }
        </form>
      </Fragment>
    );
  };
};

export default PostForm;