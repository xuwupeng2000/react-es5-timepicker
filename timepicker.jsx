var Timepicker = React.createClass({
  getInitialState() {
    let amPm, min, hour;
    [hour, min, amPm] = _.split(this.props.default, '-', 3);

    return {
      hidden: true, // Don't show it by default
      amPm: amPm,
      min: min,
      hour: hour
    };
  },

  onMinSelect(event) {
    let min = $(event.currentTarget).data('value');
    this.setState({min: min});
  },

  onHourSelect(event) {
    let hour = $(event.currentTarget).data('value');
    this.setState({hour: hour});
  },

  onAmPmSelect(event) {
    let amPm = $(event.currentTarget).data('value');
    this.setState({amPm: amPm});
  },

  calTime() {
    let time
    if (this.state.hour && this.state.min && this.state.amPm) {
      time = `${this.state.hour} : ${this.state.min} ${this.state.amPm}`;
    } else {
      time = '';
    }
    return time;
  },

  onClose() {
    this.setState({hidden: true});
  },

  onFocus() {
    this.setState({hidden: false});
  },

	render() {
    let time = this.calTime();

    if(this.state.hidden){
      return (
        <div className="timepicker">
          <div className="time-input">
            <input onFocus={ this.onFocus } name={this.props.form_name} className="form-control string optional" value={time} type="text"/>
          </div>
        </div>
      )
    } else {
      let minRange = _.range(0, 61).map(e => {
        return _.padStart(e, 2, '0');
      });
      let hourRange = _.range(1, 13)
      let amPmRange = ['AM', 'PM']

      let minOpt = minRange.map((e) =>{
        let klasses = e == this.state.min ? 'unit selected' : 'unit'
        return <li onClick={this.onMinSelect} className={klasses} data-value={e}>{e}</li>;
      });

      let hourOpt = hourRange.map((e) =>{
        let klasses = e == this.state.hour ? 'unit selected' : 'unit'
        return <li onClick={this.onHourSelect} className={klasses} data-value={e}>{e}</li>;
      });

      let amPmOpt = amPmRange.map((e) =>{
        let klasses = e == this.state.amPm ? 'unit selected' : 'unit'
        return <li onClick={this.onAmPmSelect} className={klasses} data-value={e}>{e}</li>;
      });

      return (
        <div className="ivhq-timepicker">
          <div className="time-input">
            <input name={this.props.form_name} className="form-control string optional" value={time} type="text"/>
          </div>

          <div className="time-selector form-control">
            <div className="row">
              <ul className="col-sm-4 unit-select">
                {hourOpt}
              </ul>
              <ul className="col-sm-4 unit-select">
                {minOpt}
              </ul>
              <ul className="col-sm-4 unit-select">
                {amPmOpt}
              </ul>
            </div>
            <div onClick={this.onClose} className="col-sm-12 close-button">
              <span className="btn btn-primary">
                Confirm
              </span>
            </div>
          </div>
        </div>
      );
    }

	}
});
