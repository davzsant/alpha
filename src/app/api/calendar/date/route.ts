import { NextResponse } from "next/server";

export default async function GET(){
    return NextResponse.json({teste:"teste"}
        /* {
            allDays:[
                {
                    day: "29-07-2024",
                    events:[
                        {
                            text:"Aniversario de fulana",
                            horario: "12:00:00",
                            info: "Ir com roupa social"
                        },
                        {
                            text:"Arrumar geladeira",
                            info: "Levar equipamentos"
                        },
                        {
                            text:"Ajudar mae com artesanatos",
                            horario: "21:00:00"
                        },
                        {
                            text:"Dormir com o aparelho limpo"
                        }
                        ]
                },
                {
                    day: "12-08-2024",
                    events:[
                        {
                            text:"Ir a reuniao",
                            horario: "08:00:00",
                            info: "Ir com roupa social"
                        },
                        ]
                },
                {
                    day: "26-07-2024",
                    events:[
                        {
                            text:"Sair com best friend"
                        }
                        ]
                },
            ]
        } */
    )
}