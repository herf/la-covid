$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "185,872",
				            "death": "4,552" ,
				            "dailycount": "2,628",
				            "dailydeath": "41" ,
				            "date":"07/30" ,
				            "info":"through 8:00pm 07/29/2020" ,
				            
							"testingaverage":"18,965" ,
							"peopletested":"1,733,373" ,
							"positivity":"9.2%" ,
							"hospitalizations":"2,022" ,                    
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



