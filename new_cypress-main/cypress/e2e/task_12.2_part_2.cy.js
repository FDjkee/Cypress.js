import * as data from "../helpers/data_for_pokemonbattle.json"
import * as login_page from "../pokemon_locators/login_page.json"
import * as main_page from "../pokemon_locators/main_page.json"
import * as trainer_page from "../pokemon_locators/trainer_page.json"
import * as avatar_list from "../pokemon_locators/avatar_list.json"
import * as payform_page from "../pokemon_locators/payform_page.json"
import * as verification_paymnet_page from "../pokemon_locators/verification_payment_page.json"
import * as payment_result_page from "../pokemon_locators/result_payment_page.json"

describe('тестирование сайта pokemonbattle.ru', function () {

    beforeEach('Начало теста', function () {
        cy.visit('https://pokemonbattle.ru/login');
    });

    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.get(login_page.email).type(data.login);
        cy.get(login_page.password).type(data.password);
        cy.get(login_page.login_button).click({ force: true });
        cy.wait(2000);
        cy.get(main_page.trainer_account_button).click({ force: true });
        cy.get(trainer_page.avatar_shop).click({ force: true });
        cy.get(avatar_list.available_avatar).first().click({ force: true });
        cy.get(payform_page.card_number).type(data.card_number);
        cy.get(payform_page.exp_date).type(data.exp_date);
        cy.get(payform_page.cvv).type(data.cvv);
        cy.get(payform_page.holders_name).type(data.holder_cards_name);
        cy.get(payform_page.payment_submit_button).click({force: true});
        cy.get(verification_paymnet_page.sms_code).type(data.code);
        cy.get(verification_paymnet_page.sub_button).click({force: true});
        cy.get(payment_result_page.payment_result).contains('Покупка прошла успешно');
    })

 }) 