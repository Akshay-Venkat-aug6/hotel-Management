import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Amenities from '../../../components/customer/Normal/Amenities';
import ModifyBar from '../../../components/customer/Normal/ModifyBar';
import HotelCard from '../../../components/customer/Normal/HotelCard';
import { connect } from 'react-redux';
import { SEARCH } from '../../../store/customer/search/action';
import { bindActionCreators } from "redux";
import Loading from '../../../components/customer/Loading';

class SearchPage extends React.Component{
  state = {
    checkIn: '', checkOut:'', noofadult: '', noofrooms: '', partcode: '', hotels:[]
  }
  componentDidMount(){
    const paramsString = this.props.location.search;
    const params = new URLSearchParams(paramsString); 
    let search_details = {
      checkIn : params.get('checkIn'),
      checkOut : params.get('checkOut'),
      noofadult : params.get('noofadult'),
      noofrooms : params.get('noofrooms'),
      partcode : params.get('partcode')
    }
    this.setState(search_details)
    this.props.SEARCH(search_details)
  }

  render(){
    return (
      <div>
        <Header />
        { this.props.isFind ? 
          <div style={{display: "flex"}}>
            <div style={{paddingTop: "5%", marginLeft: "6%"}}>
              <Amenities />
            </div>
            <div style={{paddingTop: "5%", marginLeft: "2%"}}>
              <ModifyBar 
                checkIn={this.state.checkIn} checkOut={this.state.checkOut} noofadult={this.state.noofadult} noofrooms={this.state.noofrooms} partcode={this.state.partcode}
              />
              <HotelCard hotels ={this.props.hotels}/>
            </div>
          </div>
           : 
           <Loading />
         }
      </div>
    )
  }
}

const mappingStateToProps = ({search}) => {
  return { 
    isFind: search.isFind,
    hotels: search.hotels
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ SEARCH }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(SearchPage);