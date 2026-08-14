export default function ClassementPage() {
  const podium = [
    { pseudo: "Mathieu", score: 162 },
    { pseudo: "Sophie", score: 154 },
    { pseudo: "Julien", score: 148 },
  ];

  const participants = [
    { pseudo: "Mathieu", score: 162 },
    { pseudo: "Sophie", score: 154 },
    { pseudo: "Julien", score: 148 },
    { pseudo: "Camille", score: 140 },
    { pseudo: "Lucas", score: 132 },
  ];

  return (
    
      
        
          🏆 Classement
        

        
          Les meilleurs pronostiqueurs de la famille
        

        {/* Podium /}
        
          
            🥈
            
              {podium[1].pseudo}
            
            
              {podium[1].score} pts
            
          

          
            🥇
            
              {podium[0].pseudo}
            
            
              {podium[0].score} pts
            
          

          
            🥉
            
              {podium[2].pseudo}
            
            
              {podium[2].score} pts
            
          
        

        {/ Tableau classement */}
        
          
            📊 Classement complet
