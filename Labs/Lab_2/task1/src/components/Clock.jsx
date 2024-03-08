import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date(),
        });
    }

    formatTime(date) {
        const { format } = this.props;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (format === "12") {
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            return `${hours}:${this.padTime(minutes)}:${this.padTime(
                seconds
            )} ${ampm}`;
        } else {
            return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(
                seconds
            )}`;
        }
    }

    padTime(time) {
        return time < 10 ? "0" + time : time;
    }
    render() {
        const { timezone } = this.props;
        const { time } = this.state;
        const localtime = new Date(
            time.getTime() + time.getTimezoneOffset() * 60000
        );
        const [hours, minutes] = timezone.split(":");
        const timezoneOffset = (Number(hours) + Number(minutes)) * 60;
        const targetTime = new Date(
            localtime.getTime() + timezoneOffset * 60000
        );
        const formattedTime = this.formatTime(targetTime);

        return <div>{formattedTime}</div>;
    }
}

export default Clock;