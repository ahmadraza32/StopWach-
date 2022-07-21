function StopWach(){
    let startTime, endTime, running, duration = 0

    this.start = function(){
        if(running){
            throw new Error("Stop watch already started")
        }

        running = true
        startTime = new Date()
    }

    this.stop = function(){
        if(!running){
            throw new Error("Stop watch not started")
        }

        running = false
        endTime = new Date()

        duration = (endTime.getTime() - startTime.getTime()) / 1000
    }

    this.reset = function(){
        startTime = endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration
        }
    })
}