# React ES5 timepicker

![screen shot](https://github.com/xuwupeng2000/react-es5-timepicker/blob/master/screen_shot.png)

This picker depends on lodash.
Include lodash in your project and drop this in as JSX file and  you are ready to go.
You don't need to import modules and all that. 🤠🤠🤠
The code is wrote for readability, take a look I am sure you understand it.

## Configs
The date format need to be 4-04-PM, spitting by - and therefore the JS can know which part is the time, hour, am pm.
You can specify default value and form_name

#### For react-rails user
```
= react_component('Timepicker', default: @detail.time.strftime("%l-%M-%p"), form_name: 'detail[time]')
```

#### For JS user
```
ReactDOM.render(
  <Timepicker default: default_value, form_name: 'a_name_there' />, document.getElementById('root')
);
```


