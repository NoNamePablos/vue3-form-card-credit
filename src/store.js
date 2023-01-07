import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => ({
        plans:[
            {
            idPlan:1,
            title:'Base Plan',
            price:'45',
            adventages:[
                {
                    message:"all features in basic includes",
                    strong:"basic includes"
                },
                {
                    message:"20 GB Free space",
                    strong:"20 GB"
                }
            ]
            },
            {
                idPlan:2,
                title:'Medium Plan',
                price:'65',
                adventages:[
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                    {
                        message:"45 GB Free space",
                        strong:"45 GB"
                    }
                ]
            },
            {
                idPlan:3,
                title:'Profeesional Plan',
                price:'96',
                adventages:[
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                    {
                        message:"700 GB Free space",
                        strong:"700 GB"
                    },
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                ]
            },
            {
                idPlan:4,
                title:'Compnay Plan',
                price:'250',
                adventages:[
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                    {
                        message:"Unlimitted Free space",
                        strong:"Unlimitted"
                    },
                    {
                        message:"all features in basic includes",
                        strong:"basic includes"
                    },
                    {
                        message:"Unlimitted Free space",
                        strong:"Unlimitted"
                    },
                    {
                        message:"Unlimitted Tech support",
                        strong:"Unlimitted"
                    },
    
                ]
            },
                
        ],
        activeIndex:4,
        platformFee:12,
        promocode:{
            title:"PROMO1",
            price:10,
        }
    }),
    getters: {

      getAll:(state)=>state.plans,
      getPlanById:(state)=>{
        return (planId)=>state.plans.find((plan) => plan.idPlan === planId)
        
      },
      getActiveIndex:(state)=>state.activeIndex,
      //fix problem if array promo
      getPromo:(state)=>state.promocode,
      getPlatformFee:(state)=>state.platformFee,
    },
    actions:{
        setActiveIndex(value){
            this.activeIndex=value;
        },
    }

  })