$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "143,009",
				            "death": "3,936" ,
				            "dailycount": "2,758",
				            "dailydeath": "44" ,
				            "date":"07/15" ,
				            "info":"through 8:00pm 07/14/2020" ,
				            
							"testingaverage":"15,649" ,
							"peopletested":"1,409,712" ,
							"positivity":"9%" ,
							"hospitalizations":"2,193" ,                    
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



