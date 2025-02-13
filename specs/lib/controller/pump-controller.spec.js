describe('pump controller', function() {

    describe('#startPumpController starts the timer for 1 or 2 pumps', function() {
        context('on app startup', function() {
            it('sets pump 1 timer to run every 30 seconds', function() {
                bottle.container.settings.numberOfPumps = 1
                expect(bottle.container.pumpController.startPumpController()).to.be.true;
            });
            it('sets pump 2 timer to run every 30 seconds', function() {
                bottle.container.settings.numberOfPumps = 2
                expect(bottle.container.pumpController.startPumpController()).to.be.true;
            });
        })

    });

    describe('#saves a pump program & rpm', function() {
        context('with a function call', function() {
            it('sets pump 1 program 1 to 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(1, 1, 1000)).to.be.true;
            });
            it('sets pump 1 program 2 to 2000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(1, 2, 2000)).to.be.true;
            });
            it('sets pump 2 program 1 to 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(2, 1, 1000)).to.be.true;
            });
            it('sets pump 1 program 5 to 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(1, 5, 1000)).to.be.false;
            });
            it('sets pump 55 program 1 to 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(55, 1, 1000)).to.be.false;
            });
            it('sets pump 1 program 1 to 5000 rpm', function() {
                expect(bottle.container.pumpController.pumpCommandSaveSpeed(1, 1, 5000)).to.be.false;
            });
        })

    });

    describe('#runs a pump program (no duration)', function() {
        context('runs a specific program', function() {
            it('sets pump 1 to run program 1', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgram(1, 1)).to.be.true;
            });
            it('sets pump 2 to run program 1', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgram(2, 1)).to.be.true;
            });
            it('sets pump 1 to run program 5', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgram(1, 5)).to.be.false;
            });
            it('sets pump 23 to run program 1', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgram(23, 1)).to.be.false;
            });
        })

    });

    describe('#runs a pump program with a duration', function() {
        context('with a function call', function() {
            it('sets pump 1 to run program 1 for 10 minutes', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgramForDuration(1, 1, 10)).to.be.true;
            });
            it('sets pump 1 to run program 1 for 10 minutes', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgramForDuration(1, 1, 10)).to.be.true;
            });
            it('sets pump 1 to run program 1 for -1 minutes', function() {
                expect(bottle.container.pumpController.pumpCommandRunProgramForDuration(1, 1, -1)).to.be.false;
            });
        })

    });

    describe('#saves and runs a pump program with a duration', function() {
        context('with a function call', function() {
            it('sets pump 1 to run program 1 for 10 minutes @ 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpSaveAndRunProgramWithSpeedForDuration(1, 1, 1000, 10)).to.be.true;
            });
            it('sets pump 2 to run program 2 for 20 minutes @ 2000 rpm', function() {
                expect(bottle.container.pumpController.pumpSaveAndRunProgramWithSpeedForDuration(2, 2, 2000, 20)).to.be.true;
            });
            it('sets pump 1 to run program 5 for 10 minutes @ 1000 rpm', function() {
                expect(bottle.container.pumpController.pumpSaveAndRunProgramWithSpeedForDuration(1, 5, 1000, 10)).to.be.false;
            });
        })

    });


    describe('#controls pump power', function() {
        context('with a function call', function() {
            it('sets pump 1 to 1 (on)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(1, 1)).to.be.true;
            });
            it('sets pump 1 to "on"', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(1, "on")).to.be.false;
            });
            it('sets pump 1 to off (0)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(1, 0)).to.be.true;
            });
            it('sets pump 2 to 1 (on)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(2, 1)).to.be.true;
            });
            it('sets pump 2 to "on"', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(2, "on")).to.be.false;
            });
            it('sets pump 1 to off (0)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(1, 0)).to.be.true;
            });
            it('sets pump 2 to off (0)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(2, 0)).to.be.true;
            });
            it('sets pump 45 to off (0)', function() {
                expect(bottle.container.pumpController.pumpCommandSetPower(45, 0)).to.be.false;
            });

        });
    });


});
