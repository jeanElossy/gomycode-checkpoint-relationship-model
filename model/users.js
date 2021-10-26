const mongoose = require('mongoose');

const PostModel = mongoose.model(
    //nom de la bd
    '',

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
                },

                membres : [ 
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
                ]
            }

        ]

    },

    //nom de la collection
    ''
)

module.exports = PostModel;