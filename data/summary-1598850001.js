$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "240,749",
				            "death": "5,769" ,
				            "dailycount": "1,030",
				            "dailydeath": "10" ,
				            "date":"08/30" ,
				            "info":"through 8:00pm 08/29/2020" ,
				            
							"testingaverage":"13,384" ,
							"peopletested":"2,282,165" ,
							"positivity":"5.5%" ,
							"hospitalizations":"1,089" ,                    
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



