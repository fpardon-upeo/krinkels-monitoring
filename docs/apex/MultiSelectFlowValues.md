# MultiSelectFlowValues Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
global class MultiSelectFlowValues {

   

   @InvocableMethod

   public static List<list<string>> CheckValues(List<string> values) {

      if(!(values.isEmpty())){

          

          string tempStr = values[0];

          List<String> lstnew = tempStr.split(';');

          list<list<string>> finalLst = new list<list<string>>();

          finalLst.add(lstnew);

          return finalLst;

      }

      else return null;

   }

}
```

## Methods
### `CheckValues(values)`

`INVOCABLEMETHOD`

#### Signature
```apex
public static List<list<string>> CheckValues(List<string> values)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| values | List&lt;string&gt; |  |

#### Return Type
**List&lt;list&lt;string&gt;&gt;**