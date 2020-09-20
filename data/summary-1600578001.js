$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "259,817",
				            "death": "6,330" ,
				            "dailycount": "1,343",
				            "dailydeath": "13" ,
				            "date":"09/19" ,
				            "info":"through 8:00pm 09/18/2020" ,
				            
							"testingaverage":"10,293" ,
							"peopletested":"2,529,785" ,
							"positivity":"3%" ,
							"hospitalizations":"732" 
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



