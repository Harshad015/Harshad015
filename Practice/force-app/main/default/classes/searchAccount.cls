public with sharing class searchAccount {
@AuraEnabled(cacheable=true)
public static List<Account> getAccounts(String strAccountName) {
String strKey = '%'+strAccountName+'%';
List<Account> accList = [SELECT Id,Name,AccountNumber FROM Account  WHERE name like :strKey ORDER BY Name ASC ];
return accList;
}
}
