const mongoose = require('mongoose');

const PostModel = mongoose.model(
    //nom de la bd
    '',

    {

        data : [ 
            
            {
                info_gym : [
                    {
                        nom_gym : {
                            type : String,
                            require : true 
                        },
        
                        adresse_gym : {
                            type : String,
                            require : true
                        },
        
                        numero_gym : {
                            type : Number,
                            require : true
                        }
                    }
                ],


                info_membres : [ 
                    {
                        id : {
                            type : Number,
                            require : true
                        },

                        nom : {
                            type : String,
                            require : true
                        },

                        adresse : {
                            type : String,
                            require : true
                        },

                        date_naissance : {
                            type : Number,
                            require : true
                        },

                        sexe : {
                            type : String,
                            require : true 
                        }
                    }
                ],


                info_session : [
                    {
                        type_sport : {
                            type : String,
                            require : true
                        },

                        horaire : {
                            type : Date,
                            default : Date.getHour()
                        },

                        nbr_membres : {
                            type : Number,
                            require : true
                        }
                    }
                ],


                info_coach : [
                    {
                        nbr_coach : {
                            type : Number,
                            require : true
                        },
                        
                        nom_coach : {
                            type : String,
                            require : true
                        },

                        prenom_coach : {
                            type : String,
                            require : true
                        },

                        age_coach : {
                            type : Number,
                            require : true
                        },

                        specialite_coach : {
                            type : String,
                            require : true
                        }
                    }
                ]

            }
        ]

    },

    //nom de la collection
    ''
)

module.exports = PostModel;