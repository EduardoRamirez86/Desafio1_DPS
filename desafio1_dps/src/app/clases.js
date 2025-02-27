//un js para tener la info de clases en Json
export const clases = [
    {
      "id": 1,
      "nombre": "Yoga",
      "dias": [
        {
          "dia": "Lunes",
          "horarios": [
            { "id": "Y-L-1", "hora": "08:00", "cupos": 12 },
            { "id": "Y-L-2", "hora": "10:00", "cupos": 10 }
          ]
        },
        {
          "dia": "Miércoles",
          "horarios": [
            { "id": "Y-Mi-1", "hora": "16:00", "cupos": 0},
            { "id": "Y-Mi-2", "hora": "18:00", "cupos": 10 }
          ]
        },
        {
          "dia": "Viernes",
          "horarios": [
            { "id": "Y-V-1", "hora": "11:00", "cupos": 15 },
            { "id": "Y-V-2", "hora": "13:00", "cupos": 0 }
          ]
        },
        {
          "dia": "Domingo",
          "horarios": [
            { "id": "Y-D-1", "hora": "09:00", "cupos": 10 }
          ]
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Spinning",
      "dias": [
        {
          "dia": "Martes",
          "horarios": [
            { "id": "S-Ma-1", "hora": "09:00", "cupos": 4 },
            { "id": "S-Ma-2", "hora": "12:00", "cupos": 2 }
          ]
        },
        {
          "dia": "Miércoles",
          "horarios": [
            { "id": "S-Mi-1", "hora": "18:00", "cupos": 6 },
            { "id": "S-Mi-2", "hora": "20:00", "cupos": 7 }
          ]
        },
        {
          "dia": "Viernes",
          "horarios": [
            { "id": "S-V-1", "hora": "07:00", "cupos": 5 },
            { "id": "S-V-2", "hora": "10:00", "cupos": 2 }
          ]
        },
      ]
    },
    {
      "id": 3,
      "nombre": "Pesas",
      "dias": [
        {
          "dia": "Lunes",
          "horarios": [
            { "id": "P-L-1", "hora": "07:00", "cupos": 15 },
            { "id": "P-L-2", "hora": "08:00", "cupos": 8 }
          ]
        },
        {
          "dia": "Miércoles",
          "horarios": [
            { "id": "P-Mi-1", "hora": "18:00", "cupos": 20 },
            { "id": "P-Mi-2", "hora": "19:00", "cupos": 10 }
          ]
        },
        {
          "dia": "Sábado",
          "horarios": [
            { "id": "P-Sa-1", "hora": "09:00", "cupos": 10 }
          ]
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Pilates",
      "dias": [
        {
          "dia": "Martes",
          "horarios": [
            { "id": "Pi-Ma-1", "hora": "10:00", "cupos": 1 }
          ]
        },
        {
          "dia": "Jueves",
          "horarios": [
            { "id": "Pi-J-1", "hora": "07:00", "cupos": 8 }
          ]
        },
        {
          "dia": "Viernes",
          "horarios": [
            { "id": "Pi-V-1", "hora": "12:00", "cupos": 7 },
            { "id": "Pi-V-2", "hora": "15:00", "cupos": 6 }
          ]
        },

      ]
    }
  ];
  
  export default clases;
  