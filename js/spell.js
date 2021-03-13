spells = {
    ESCAPE: function(){
        player.move(randomPassableTile());
    },

    DIG: function(){
        for(let i=1;i<numTiles-1;i++){
            for(let j=1;j<numTiles-1;j++){
                let tile = getTile(i,j);
                if(!tile.passable){
                    tile.replace(Floor);
                }
            }
        }
        player.tile.setEffect(13);
        player.heal(1);
    },

    SOULSTEALER: function(){
        player.tile.getAdjacentNeighbors().forEach(function(t){
            t.setEffect(14);
            if(t.monster){
                t.monster.hit(2);
            }
        });
        player.tile.setEffect(14);
        player.heal(2);
    },

    HELLSTORM: function(){
        player.tile.getAdjacentNeighbors().forEach(function(t){
            t.setEffect(15);
            if(t.monster){
                t.monster.hit(4);
            }
        });
    },

    BOLT: function(){
        player.tile.getAdjacentNeighbors().forEach(function(t){
            t.setEffect(17);
            if(t.monster){
                t.monster.hit(2);
            }            
        });
    }


};



