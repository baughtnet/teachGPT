import React, { useState } from 'react';
import { generateLessonPlan } from '../services/openaiService';

function LessonPlan() {
    const [input, setInput] = useState('');
    sonst [lessonPlan, setLessonPlan] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const generatedPlan = await generateLessonPlan(input);
            setLessonPlan(generatedPlan);
            catch (error) {
                console.error('Error generating lesson plan:', error);
            }
            setIsLoading(false);
            }
    };

    return (
        <div className="lesson-plan">
            <h1>Lesson Plan Generator</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter lesson plan topic, grade level and any content the ai should use to generate your lesson plan"
                />
                <button type="submit">Generate Lesson Plan</button>
                    {isLoading ? 'Generating...' : 'Generate Lesson Plan'}
                </button>
            </form>
        {lessonPlan && (
            <div className="generated-plan">
                <h2>Lesson Plan</h2>
                <pre>{lessonPlan}</pre>
            </div>
        )}
        </div>
    );
}

export default LessonPlan;
