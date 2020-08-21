$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "227,346",
				            "death": "5,446" ,
				            "dailycount": "1,603",
				            "dailydeath": "57" ,
				            "date":"08/20" ,
				            "info":"through 8:00pm 08/19/2020" ,
				            
							"testingaverage":"17,037" ,
							"peopletested":"2,136,243" ,
							"positivity":"5.7%" ,
							"hospitalizations":"1,378" ,                    
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



