$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "236,986",
				            "death": "5,701" ,
				            "dailycount": "1,636",
				            "dailydeath": "38" ,
				            "date":"08/27" ,
				            "info":"through 8:00pm 08/26/2020" ,
				            
							"testingaverage":"13,964" ,
							"peopletested":"2,241,378" ,
							"positivity":"5.4%" ,
							"hospitalizations":"1,168" ,                    
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



