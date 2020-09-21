$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "2,60,797",
				            "death": "6,353" ,
				            "dailycount": "991",
				            "dailydeath": "23" ,
				            "date":"09/20" ,
				            "info":"through 8:00pm 09/19/2020" ,
				            
							"testingaverage":"10,450" ,
							"peopletested":"2,542,479" ,
							"positivity":"3%" ,
							"hospitalizations":"765" 							
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



