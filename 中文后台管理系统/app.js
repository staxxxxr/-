//时钟
function todo(n)
{
	if(n<10)
	{
		return '0'+n;
	}
	else
	{
		return ''+n;
	}
}
  var aImg=document.getElementsByClassName('img');
	function time(){
		var oDate=new Date(); 
		var str=todo(oDate.getHours())+todo(oDate.getMinutes())+todo(oDate.getSeconds());
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].src='img/'+str.charAt(i)+'.png';
		}
	}
	setInterval(time, 1000);
	time();