import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllText from './js/text';
import cancel from '../../assets/img/join/x.svg';
import '../../assets/css/test.css'
import santapresent from '../../assets/img/test/Logo1.png'

const TestMain = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null); // 선택된 score 값을 저장
  const [selectedIndex, setSelectedIndex] = useState(null); // 선택된 인덱스를 저장
  const [selectedChoices, setSelectedChoices] = useState([0, 0, 0, 0]);
  const navigate = useNavigate();

  const handleChoiceClick = (score, index) => {
    setSelectedChoice(score); // 선택된 score 값을 저장
    setSelectedIndex(index);  // 선택된 인덱스를 저장
    console.log('Selected choice score:', score);
  };

  const handleNext = () => {
    if (selectedChoice !== null) {
      setSelectedChoices((prevChoices) =>
        prevChoices.map((score, index) => score + selectedChoice[index])
      );

      if (currentQuestionIndex < AllText.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedChoice(null);
        setSelectedIndex(null); // 다음 질문으로 넘어가면 선택 초기화
      }
    } else {
      console.log('No choice selected');
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === AllText.length - 1 && selectedChoice !== null) {
      setSelectedChoices((prevChoices) =>
        prevChoices.map((score, index) => score + selectedChoice[index])
      );
      navigate('/testresult', { state: { selectedChoices } });
    }
  }, [selectedChoices, currentQuestionIndex, navigate]);

  const { question, choice } = AllText[currentQuestionIndex];

  const goToStart =() => {
    navigate('/teststart');
  }

  return (
    <div className='test_wrap'>
      <div className='single_cancel' onClick={goToStart}>
        <img src={cancel} alt="Cancel" />
      </div>
      <progress max="100" value={(currentQuestionIndex / AllText.length) * 100+33} className="bar"></progress>
      <div className='question'>
        <p className='test-qestion'>{question}</p>
      </div>

      <div className='test_box'>
        {choice.map((option, index) => (
          <button
            key={index}
            className={`choice_btn ${selectedIndex === index ? 'selected' : ''}`} // 선택된 버튼에 'selected' 클래스 추가
            onClick={() => handleChoiceClick(option.score, index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      
      <img src={santapresent} className='santapresent' />
      <button 
        onClick={handleNext} 
        className={`next_btn ${selectedChoice !== null ? 'active' : 'inactive'}`}
      >다음
      </button>
    </div>
  );
};

export default TestMain;
