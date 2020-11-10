// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'music/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Gorillaz - Andromeda",
                "length": "3:17",
                "file": "Andromeda"
                
            }, {
                
                "track": 2,
                "name": "Gorillaz - Ascension",
                "length": "2:36",
                "file": "Ascension"
            }, {
                "track": 3,
                "name": "Gorillaz - Clint Eastwood",
                "length": "5:57",
                "file": "Clint Eastwood"
            }, {
                "track": 4,
                "name": "Gorillaz - DARE",
                "length": "4:47",
                "file": "DARE"
            }, {
                "track": 5,
                "name": "Gorillaz - Feel Good",
                "length": "4:13",
                "file": "Feel Good"
            }, {
                "track": 6,
                "name": "Gorillaz - Humanity",
                "length": "3:18",
                "file": "Humanity"
            }, {
                "track": 7,
                "name": "Gorillaz - O Green World",
                "length": "4:32",
                "file": "O Green World"
            }, {
                "track": 8,
                "name": "Gorillaz - On Melancholy Hill",
                "length": "4:26",
                "file": "On Melancholy Hill"
            }, {
                "track": 9,
                "name": "Gorillaz - Saturnz barz feat Popcaan",
                "length": "3:01",
                "file": "Saturnz barz feat Popcaan"
            }, {
                "track": 10,
                "name": "Gorillaz-Souk Eye",
                "length": "4:32",
                "file": "Souk Eye"
            }],
            
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#playlist').append('<li><div class="plItem"><div class="playlist-num">' + trackNumber + '.</div><div class="playlist-title">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#playlist li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#playlist li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});
$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
});
$("#bandLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#band").offset().top
    }, 500);
});
$("#albumsLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#albums").offset().top
    }, 500);
});
$("#songsLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#songs").offset().top
    }, 500);
});
$("#tourLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#tour").offset().top
    }, 500);
});
$("#contactLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});
//initialize plyr
// plyr.setup($('#audio1'), {});
jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
       });

});
jQuery(document).ready(function() {
    jQuery('.post1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
       });

});
jQuery(document).ready(function() {
    jQuery('.post2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated  bounceInUp',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated lightSpeedIn',
        offset: 100
       });
});
jQuery(document).ready(function() {
    jQuery('.post5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
       });
});
