$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "168,757",
				            "death": "4,300" ,
				            "dailycount": "1,949",
				            "dailydeath": "44" ,
				            "date":"07/24" ,
				            "info":"through 8:00pm 07/23/2020" ,
				            
							"testingaverage":"20,372" ,
							"peopletested":"1,604,708" ,
							"positivity":"8.5%" ,
							"hospitalizations":"1,928" ,                    
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



