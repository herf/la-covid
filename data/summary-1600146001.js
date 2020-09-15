$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "254,656",
				            "death": "6,231" ,
				            "dailycount": "733",
				            "dailydeath": "24" ,
				            "date":"09/14" ,
				            "info":"through 8:00pm 09/13/2020" ,
				            
							"testingaverage":"10,139" ,
							"peopletested":"2,459,076" ,
							"positivity":"3.4%" ,
							"hospitalizations":"775" , 
							                
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



