var clientView = [{name:'PETER SIMON',position:'Technical Director,ThoughtWorks',
					view:'<p class="whiteText">&#147; We have worked with WorkerThoughts for more than a year.They are through proffesionals and the quality of work is top class.The team worked very well in a distributed setting like ours, and have the knack of rolling out solutions quickly.We are very happy for their association.Looking forward to seeing them grow and be successfull.</p>'},
				  {name:'seetaram',position:'dev',view:'<p class="whiteText">&#147;I like it,cooolll.</p>'},
				  {name:'sagar',position:'dev',view:'<p class="whiteText">&#147;I like to work with TW.</p>'}]



$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


var changeText = function(client){
	a = $('#clientView')[0];
	var data = clientView[client].view;
	a.innerHTML=data;
};
