import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';

import { useInterventions } from '../../context/InterventionsProvider';
const InterventionQuestionsCard = ({ interventionID }) => {
  const [questions, setQuestions] = useState(null);
  const [fetchErr, setFetchErr] = useState(null);

  const { fetchQuestionsByInterventionId } = useInterventions();

  useEffect(() => {
    async function fetchData() {
      const res = await fetchQuestionsByInterventionId(interventionID);

      if (res.length === 0)
        return setFetchErr('Erreur lors de la récupération des questions');
      setQuestions(res.questions);
    }
    fetchData();
  }, [interventionID]);

  console.log(questions);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Questions</Text>
      {fetchErr && (
        <View style={styles.row}>
          <Text style={styles.errorMsg}>{fetchErr} </Text>
        </View>
      )}
      {questions &&
        questions.map((question) => (
          <View
            style={{
              ...styles.row,
              borderBottomColor: '#39FF14',
              borderBottomWidth: 2,
              paddingBottom: 5,
            }}
            key={question.id}>
            <Text style={styles.cardTextLeft}>{question.question_name}</Text>
            <Text style={styles.cardTextRight}>{question.response}</Text>
          </View>
        ))}
    </View>
  );
};

export default InterventionQuestionsCard;
