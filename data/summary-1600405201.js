$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "257,271",
				            "death": "6,324" ,
				            "dailycount": "1,160",
				            "dailydeath": "38" ,
				            "date":"09/17" ,
				            "info":"through 8:00pm 09/16/2020" ,
				            
							"testingaverage":"9,825" ,
							"peopletested":"2,494,106" ,
							"positivity":"3.1%" ,
							"hospitalizations":"780" , 
							                
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



