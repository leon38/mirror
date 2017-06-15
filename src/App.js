import moment from "moment";
import React, {Component} from "react";
import Calendar from "./Calendar";
import "./App.css";

class Mirror extends Component {
    render() {
        return (
            <div className="Mirror container">
                <div className="col-md-4">
                    <Calendar startDate={ moment() }
                              endDate={ moment().endOf('month') }
                              weekNumbers={false}
                              yearHeaderVisible={false}
                              size={12}
                              mods={
                                  [
                                      {
                                          date: moment(),
                                          classNames: ['current'],
                                          component: ['day', 'month', 'week'],
                                      }
                                  ]
                              }
                    />
                </div>
                <div className="col-md-4">
                    <Today />
                </div>
            </div>
        );
    }
}

export class Today extends Component {
    moment () {
        const localMoment = moment.apply(null, arguments);

        localMoment.locale(this.props.locale);

        return localMoment;
    }

    render() {
        let today = new moment();
        return (
            <div className="Today">
                <span className="today--weekday">{ today.format('dddd')}</span><br />
                <span className="today--day">{ today.format('DD') }</span><br />
                <span className="today--month">{ today.format('MMMM') }</span>
            </div>
        );
    }
}

export default Mirror;