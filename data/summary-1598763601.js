$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "239,756",
				            "death": "5,759" ,
				            "dailycount": "1,339",
				            "dailydeath": "27" ,
				            "date":"08/29" ,
				            "info":"through 8:00pm 08/28/2020" ,
				            
							"testingaverage":"13,507" ,
							"peopletested":"2,272,050" ,
							"positivity":"5.1%" ,
							"hospitalizations":"1,116" ,                    
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



