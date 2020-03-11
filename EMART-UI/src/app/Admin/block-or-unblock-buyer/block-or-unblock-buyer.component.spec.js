"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var block_or_unblock_buyer_component_1 = require("./block-or-unblock-buyer.component");
describe('BlockOrUnblockBuyerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [block_or_unblock_buyer_component_1.BlockOrUnblockBuyerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(block_or_unblock_buyer_component_1.BlockOrUnblockBuyerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
