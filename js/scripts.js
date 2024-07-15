
var current = 0;
var topics = ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6', 'topic7', 'topic8'];

function step(incr) {
    current += incr;
    window.location.href = '#'+topics[current];
}