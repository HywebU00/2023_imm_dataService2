$(document).ready(function(){

  // 地圖顯示改寫
  var _Gmap = $('.G-map'),
      _ports = _Gmap.find('.airport, .port').find('li'),
      _mapInfo = _Gmap.find('.mapInfo'),
      portID ='';

	_ports.click(function(e){
		e.preventDefault();
		portID = $(this).attr('id');
		mapInfoID = '#mapInfo-'+portID;
		_mapInfo.fadeOut().filter($(mapInfoID).fadeIn());
	});

});