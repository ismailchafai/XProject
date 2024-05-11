package org.bshg.taxe38.serviceEquipeTaxe38;

import org.bshg.taxe38.dao.Taxe38DetailDao;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.exceptions.NotFoundException;
import org.bshg.taxe38.services.facade.Locale38DetailService;
import org.bshg.taxe38.services.facade.TauxTaxe38Service;
import org.bshg.taxe38.services.facade.Taxe38Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalculeTaxe {

    @Autowired
    private Locale38DetailService locale38DetailService;
    @Autowired
    private TauxTaxe38Service tauxTaxe38Service;
    @Autowired
    private Taxe38Service taxe38Service;
    @Autowired
    private Taxe38DetailDao dao;

    public Taxe38Detail tax38Detail(Taxe38Detail item) {
        double superficier = 0;

        if (item == null) return null;
        var locale38Detail = item.getLocale38Detail();
        if (locale38Detail != null) {
            if (locale38Detail.getId() == null) item.setLocale38Detail(null);
            else {
                Locale38Detail locale38Detail1 = locale38DetailService.findById(locale38Detail.getId());
                if (locale38Detail1 == null) throw new NotFoundException("Unknown Given Locale38Detail");
                System.out.println("locale38Detail null");
                item.setLocale38Detail(locale38Detail1);

                if(locale38Detail1.getSuperficie()!=0){
                    superficier = locale38Detail1.getSuperficie();
                }

            }
        }
        TauxTaxe38 tauxTaxe38 = item.getTauxTaxe38();
        if (tauxTaxe38 != null) {
            if (tauxTaxe38.getId() == null) item.setTauxTaxe38(null);
            else {
                TauxTaxe38 found = tauxTaxe38Service.findById(tauxTaxe38.getId());
                if (found == null) throw new NotFoundException("Unknown Given TauxTaxe38");
                System.out.println("TauxTaxe38 ==null");
                item.setTauxTaxe38(found);

                if(found.getMontantParMetreCarre()!=0){
                    item.setMontantParMetreCarre(found.getMontantParMetreCarre());
                }

            }
        }
// check if taxe38 exists
        var taxe38 = item.getTaxe38();
        if (taxe38 != null) {
            if (taxe38.getId() == null) item.setTaxe38(null);
            else {
                Taxe38 found = taxe38Service.findById(taxe38.getId());
                if (found == null) throw new NotFoundException("Unknown Given Taxe38");
                System.out.println("Taxe38 ==null");
                item.setTaxe38(found);
            }
        }
        else {
            item.setTauxTaxe38(null);
        }
        double montanBase=superficier*item.getMontantParMetreCarre();
        System.out.println(montanBase);
        item.setMontantBase(montanBase);
        return dao.save(item);
    }
}
