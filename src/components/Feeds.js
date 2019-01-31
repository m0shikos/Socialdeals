import React, { Component } from 'react';
import axios from 'axios';
import FeedsGrid from './Feeds/FeedsGrid'
import Loading from './Loading';
import ScraperInput from './Forms/ScraperInput'

class Feeds extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            showPopup: false,
            isLoading: true
        }
    }

    async getDeals() {
        return await axios.get("http://localhost:3005/deals")
    }

    async componentDidMount() {
        const res = await this.getDeals()
        this.setState({ data: res.data, isLoading: false })
    }

    render() {
        if (this.state.isLoading) { return <Loading /> }
        console.log(this.state.data)
        return (
            <div className="main-grid">
                {/* {this.state.showPopup && <ScraperInput showPopup={this.state.showPopup} />} */}
                {this.state.data.map((d, index) => <FeedsGrid key={index} data={d} />)}
            </div>
        );
    }
}

export default Feeds