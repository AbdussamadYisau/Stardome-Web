import React ,{ Component } from 'react';
import './tournament.scss';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/Tabs/Tabs';
import Upcoming from '../../components/UpComing/UpComing';
import EventSchedule from '../../components/eventSchedule/eventSchedule';

class TournamentPage extends Component
{
    state = 
    {
        showUpComing:true,
        showTourn:false
    }

    toggleShowUpComing = () =>
    {
        this.setState({
            showUpComing:true,
            showTourn:false
        });
    }

    toggleShowTourn = () =>
    {
        this.setState({
            showUpComing:false,
            showTourn:true
        });
    }

    render()
    {
        const upCom = this.state.showUpComing ? <Upcoming /> : <EventSchedule/>
        
        return (
            <>
            <div className="bg">
                <NavBar/>
                <Tabs 
                   showUpComing={this.toggleShowUpComing}
                   showTourn={this.toggleShowTourn}
                   isTourn={this.state.showTourn} 
                   isUpcoming={this.state.showUpComing} />
                { upCom }
                <Footer/>
            </div>
            </>
        );
    }
}

export default TournamentPage;