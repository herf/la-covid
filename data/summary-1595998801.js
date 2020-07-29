$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "178,642",
				            "death": "4,426" ,
				            "dailycount": "2,708",
				            "dailydeath": "51" ,
				            "date":"07/28" ,
				            "info":"through 8:00pm 07/27/2020" ,
				            
							"testingaverage":"20,138" ,
							"peopletested":"1,674,512" ,
							"positivity":"8.4%" ,
							"hospitalizations":"2,051" ,                    
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



