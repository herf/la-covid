$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "248,334",
				            "death": "6,005" ,
				            "dailycount": "798",
				            "dailydeath": "5" ,
				            "date":"09/06" ,
				            "info":"through 8:00pm 09/05/2020" ,
				            
							"testingaverage":"12,465" ,
							"peopletested":"2,373,050" ,
							"positivity":"4.5%" ,
							"hospitalizations":"966" , 
							                
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



