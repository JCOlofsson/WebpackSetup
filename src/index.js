import $ from 'jquery'
import _ from 'lodash'
import * as bootstrap from 'bootstrap';


if( $ ) $("body").append("<div><p>jQuery loaded</p></div>")
if( _ ) $("body").append("<div><p>Lodash loaded</p></div>")
if( bootstrap ) $("body").append("<div><p>Bootstrap loaded</p></div>")