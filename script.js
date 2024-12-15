function flerChanged() {
    var flyerPosition = document.getElementById("timeline").value;
  
    
    
    var timelineDate = [
      "",
      "",
      "",
      ""
    ];
    
    var eventHeadlines = [
      "Drag Show Flyer",
      "",
      "",
      ""
    ];
  
    var timelineImages = [
      "C:\Users\rando\OneDrive\Documents\GitHub\porfolio\450781590_1596814897830853_189360977095079408_n.jpg",
      "",
      "",
      "",
    ];
  
    var timelineText = [
      "Clinet requested a flyer based on the movie 13 Ghost, for a Friday the 13th themed Show.",
      "",
      "",
      "",
    ]
  
    if ( timelinePosition == "0" ) {
      setTimelineDate( timelineDate[0] );
      setTimelineHeadline( eventHeadliness[0] );
      setTimelineImage( timelineImages[0] );
      setTimelineText( timelineText[0] );
    }
    if ( timelinePosition == "1" ) {
      setTimelineDate( timelineDate[1] );
      setTimelineHeadline( eventHeadlines[1] );
      setTimelineImage( timelineImages[1] );
      setTimelineText( timelineText[1] );
    }
   if ( timelinePosition == "2" ) {
      setTimelineDate( timelineDate[2] );
      setTimelineHeadline( eventHeadlines[2] );
      setTimelineImage( timelineImages[2] );
      setTimelineText( timelineText[2] );
    }
     if ( timelinePosition == "3" ) {
      setTimelineDate( timelineDate[3] );
      setTimelineHeadline( eventHeadlines[3] );
      setTimelineImage( timelineImages[3] );
      setTimelineText( timelineText[3] );
    }

    
  }
  
  

  function setEventHeadline( headline ) {
    document.getElementById("headline").innerHTML = headline;
  }
  
  function setTimelineDate( date ) {
    document.getElementById("date").innerHTML = date; 
  }
  
  function setTimelineImage( image ) {
    document.getElementById("image").src = image;   
  }
  
  function setTimelineText( text ) {
    document.getElementById("text").innerHTML = text; 
  }
  
  var modified = document.lastModified