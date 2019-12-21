import React, { Component, Fragment } from 'react';
import axiosBlog from '../../axiosBlog';
import NavBar from '../../components/UI/NavBar/NavBar';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Navs from '../../components/UI/Navs/Navs';
import Quotes from '../../components/Quotes/Quotes';
import { FaWindowClose } from 'react-icons/fa';


class MainPage extends Component  {

  state = {
    quotes: {},
    loading:false,
  };

  componentDidMount () {
    this.quotesGet('mount');
  }

 componentDidUpdate(prevProps) {
    prevProps.match.params.name !== this.props.match.params.name && this.quotesGet();
    prevProps.location.key !== this.props.location.key && this.quotesGet('update')
  }

  quotesRemoveHandler = async (id) => {
    await axiosBlog.delete(`/quotes/${id}.json`);
      this.props.history.push('/quotes');
  };

  

  quotesGet = async (str) => {
    console.log(str)
    let url ='/quotes.json'
    if (this.props.match.params.name) {
      url+=`?orderBy="category"&equalTo="${this.props.match.params.name}"`
    }
    this.setState({loading:true});
    const result = await axiosBlog.get(url);
    result.data? this.setState({quotes:result.data}) : this.setState({quotes:{}})
    this.setState({loading:false});
  }

  render = () => {
    let { quotes } = this.state
    console.log(quotes)
    return (
      <Fragment>
        {this.state.loading && 
          <Spinner/>
        }
        <NavBar/>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <Navs/>
            </div>
            <div className='col-9'>
              {Object.keys(quotes).map(id => (
                <Quotes
                  key={id}
                  author={quotes[id].author}
                  text={quotes[id].text}
                  id={id}
                  history={this.props.history}
                >
                  <Button
                      label={<FaWindowClose/>}
                      type='button'
                      addClass=' close'
                      click={() => this.quotesRemoveHandler(id)}
                  />
                </Quotes>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
};

export default MainPage;