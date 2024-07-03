import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
import LessonPlan from './pages/LessonPlan';
// import QuizGenerator from './pages/QuizGenerator';
// import ReportCardComments from './pages/ReportCardComments';
// import PDFChat from './pages/PDFChat';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/lesson-plan" component={LessonPlan} />
//                    <Route path="/quiz-generator" component={QuizGenerator} />
//                    <Route path="/report-card-comments" component={ReportCardComments} />
//                    <Route path="/pdf-chat" component={PDFChat} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
