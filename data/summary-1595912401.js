$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "176,028",
				            "death": "4,375" ,
				            "dailycount": "2,039",
				            "dailydeath": "17" ,
				            "date":"07/27" ,
				            "info":"through 8:00pm 07/26/2020" ,
				            
							"testingaverage":"20,248" ,
							"peopletested":"1,649,442" ,
							"positivity":"8.3%" ,
							"hospitalizations":"2,017" ,                    
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



