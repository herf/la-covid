$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "130,242",
				            "death": "3,793" ,
				            "dailycount": "2,916",
				            "dailydeath": "57" ,
				            "date":"07/11" ,
				            "info":"through 8:00pm 07/10/2020" ,
				            
							"testingaverage":"17,097" ,
							"peopletested":"1,313,130" ,
							"positivity":"9%" ,
							"hospitalizations":"2,032" ,                    
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



