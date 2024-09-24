export const demandMock = [
  {
    id: 1,
    vehicleTag: "QQQ5283",
    clientName: "Beatriz Neaime",
    clientPhone: "(35) 95558-4751",
    os: false,
    checkin: true,
    checkup: false,
    checkout: false,
    tecDelivery: false,
    date: "14/08/2024",
    vehicle: {
      id: 1,
      model: "RENAULT/KWID INTENS 10MT",
    },
    demand: {
      id: 1,
      description:
        "O sistema de arrefecimento do carro está apresentando falhas, causando superaquecimento do motor em situações de trânsito intenso ou em dias muito quentes",
    },
  },
  {
    id: 2,
    vehicleTag: "QQQ5284",
    clientName: "Maria Silva",
    clientPhone: "(35) 9558-4751",
    os: false,
    checkin: true,
    checkup: true,
    checkout: false,
    tecDelivery: false,
    date: "14/08/2024",
    vehicle: {
      id: 2,
      model: "RENAULT/KWID INTENS 10MT",
    },
    demand: {
      id: 2,
      description:
        "O sistema de freios do veículo está apresentando problemas, resultando em uma perda de eficiência na frenagem, especialmente em descidas íngremes ou durante frenagens bruscas",
    },
  },
  {
    id: 3,
    vehicleTag: "QQQ5285",
    clientName: "João Santos",
    clientPhone: "(35) 9558-4751",
    os: true,
    checkin: false,
    date: "03/09/2024",
    vehicle: {
      id: 3,
      model: "I/FIAT CRONOS DRIVE",
    },
    demand: {
      id: 2,
      description:
        "O sistema de freios do veículo está apresentando problemas, resultando em uma perda de eficiência na frenagem, especialmente em descidas íngremes ou durante frenagens bruscas",
    },
  },
  {
    id: 4,
    vehicleTag: "QQQ5286",
    clientName: "José Silva",
    clientPhone: "(35) 9558-4751",
    os: true,
    checkin: false,
    date: "03/09/2024",
    vehicle: {
      id: 4,
      model: "I/FIAT CRONOS DRIVE",
    },
    demand: {
      id: 2,
      description:
        "O sistema de freios do veículo está apresentando problemas, resultando em uma perda de eficiência na frenagem, especialmente em descidas íngremes ou durante frenagens bruscas",
    },
  },
];
