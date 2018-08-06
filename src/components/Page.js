import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
    onYearBtnClick(e){
        this.props.getPhotos(+e.target.innerText)
    }
    render(){
        const {year, photos, fetching} = this.props;
        return <div className='page ib'>
            <p>
                <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
                <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2017</button>
                <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2018</button>
            </p>
            <h3>{year} year</h3>
            { fetching ? <p>Loading...</p> : <p>You have {photos.length} photos from {year} year.</p> }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};

export default Page;