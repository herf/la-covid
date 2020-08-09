$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "206,761" ,
				            "death": "4,967" ,
				            "dailycount": "2,645" ,
				            "dailydeath": "51" ,
				            "date":"08/08" ,
				            "info":"through 8:00pm 08/07/2020" ,
				            
							"testingaverage":"19,789" ,
							"peopletested":"1,914,731" ,
							"positivity":"7.5%" ,
							"hospitalizations":"1,610" ,                    
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



