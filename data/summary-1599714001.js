$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "249,859",
				            "death": "6,090" ,
				            "dailycount": "671",
				            "dailydeath": "61" ,
				            "date":"09/09" ,
				            "info":"through 8:00pm 09/08/2020" ,
				            
							"testingaverage":"11,905" ,
							"peopletested":"2,392,830" ,
							"positivity":"4.1%" ,
							"hospitalizations":"936" , 
							                
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



