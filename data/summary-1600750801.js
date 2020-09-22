$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "261,446",
				            "death": "6,366" ,
				            "dailycount": "652",
				            "dailydeath": "16" ,
				            "date":"09/21" ,
				            "info":"through 8:00pm 09/20/2020" ,
				            
							"testingaverage":"11,563" ,
							"peopletested":"2,552,055" ,
							"positivity":"2.9%" ,
							"hospitalizations":"749" 							
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



